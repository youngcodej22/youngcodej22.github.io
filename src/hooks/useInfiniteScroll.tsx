import { MutableRefObject, useState, useEffect, useRef, useMemo } from 'react'
import { PostListItemType } from 'types/PostItem.types'

export type useInfiniteScrollType = {
  containerRef: MutableRefObject<HTMLDivElement | null>
  postList: PostListItemType[]
}

// 저희는 한 번에 10개의 포스트 아이템을 출력해주겠습니다.
// 이를 다시 말해 커스텀 훅에서 useState를 통해 10개 단위의 포스트 목록을 얼마나 띄워줄지 정할 것이고, 해당 갯수만큼 파라미터로 받은 posts 데이터를 잘라내 반환할 것입니다
const NUMBER_OF_ITEMS_PER_PAGE = 10

//! 따라서 화면에 보이는지 체크하기 위한 특정 요소를 선택하기 위해, 상위 요소인 PostListWrapper를 연결해야합니다.
//! 이를 위해 사용하는 Hook이 useRef이며, 다음과 같이 커스텀 훅에서 ref를 선언한 후 반환값에 추가해줍시다.

// Div 요소인 PostListWrapper 컴포넌트를 연결하기 위해 useRef Hook에 HTMLDivElement라는 타입을 제네릭으로 정의해주었습니다.
const useInfiniteScroll = function (
  selectedCategory: string,
  posts: PostListItemType[],
): useInfiniteScrollType {
  const containerRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)

  // build 시에 client api인 intersectionobserver에 대한 에러가 발생하기 때문에 아래와 같은 처리를 useEffect를 사용하여 처리
  // if (IntersectionObserver === undefined) return
  // if (window === undefined) return
  const observer: MutableRefObject<IntersectionObserver | null> =
    useRef<IntersectionObserver>(null)
  const [count, setCount] = useState<number>(1)

  const postListByCategory = useMemo<PostListItemType[]>(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }: PostListItemType) =>
          selectedCategory !== 'All'
            ? categories.includes(selectedCategory)
            : true,
      ),
    [selectedCategory],
  )

  // 저희는 단 하나의 요소만 관측할 것이기 때문에 관측 요소 배열 파라미터에 해당하는 entries 인자에는 하나의 데이터만 존재합니다.
  // const observer: IntersectionObserver = new IntersectionObserver(
  //   (entries, observer) => {
  //     if (!entries[0].isIntersecting) return

  //     setCount(value => value + 1)
  //     observer.disconnect()
  //   },
  // )
  useEffect(() => {
    observer.current = new IntersectionObserver((entries, observer) => {
      if (!entries[0].isIntersecting) return

      setCount(value => value + 1)
      // disconnet()는 첫 추가 로딩 이후 더 이상 데이터가 로딩되지 않는 문제가 발생하여 unobserve로 대체
      observer.unobserve(entries[0].target)
    })
  }, [])

  //   여기까지 작성한 후 로컬 서버를 실행시켜 확인해보면 인피니티 스크롤 기능은 잘 구현되지만, 다른 카테고리를 선택한 경우에 포스트 아이템이 10개 넘게 출력되는 것을 확인할 수 있습니다.

  // 따라서 선택된 카테고리가 변경된 경우에는 count 값을 1로 변경해주는 코드를 추가해줍시다.
  useEffect(() => setCount(1), [selectedCategory])

  // observer를 선언했으니, 이를 통해 observe 메서드를 사용하는 부분을 구현해봅시다.
  // 이를 위해 useEffect 훅을 사용할 것이고, count 값이 변경될 때마다 ref로 연결된 요소의 맨 마지막 자식 노드를 관측할 것이기 때문에 다음과 같이 코드를 작성해줘야 합니다.
  useEffect(() => {
    if (
      NUMBER_OF_ITEMS_PER_PAGE * count >= postListByCategory.length ||
      containerRef.current === null ||
      containerRef.current.children.length === 0 ||
      observer.current === null
    )
      return

    observer.current.observe(
      containerRef.current.children[containerRef.current.children.length - 1],
    )
  }, [count, selectedCategory])

  return {
    containerRef,
    postList: postListByCategory.slice(0, count * NUMBER_OF_ITEMS_PER_PAGE),
  }
}

export default useInfiniteScroll
