import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

type CategoryItemProps = {
  active: boolean
}

// 위에 타입과 중복 되는 부분을 &로 합침
type GatsbyLinkProps = {
  children: ReactNode
  className?: string
  to: string
} & CategoryItemProps

export type CategoryListProps = {
  selectedCategory: string
  categoryList: {
    // 프로퍼티 이름은 문자열, 프로퍼티 값은 숫자임을 나타내는 타입 표기 방법
    [key: string]: number
  }
}

const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;

  > * {
    font-family: 'BMJUA', sans-serif;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 80px;
    padding: 0 20px;
  }
`
// 이는 active라는 이름의 props가 boolean 형태라서 그런데요, 단순히 이 값을 문자열 형태로 바꿔주어도 해결이 가능하지만 저희는 다른 방법으로 이 문제를 해결해봅시다.
// 문제는 결국 active 속성이라는 것입니다.
// 그럼, 이 속성을 Styled Component에서 Props로 받아서 처리만 하게끔 구현할 수는 없을까요?
// 이를 위해 styled 함수의 매개변수로 Link 함수만 넘기던 것을 아래와 같이 변형할 수 있습니다.

// 주석은 active 파라미터가 사용되지 않아 뜨는 경고문을 무시하기 위한 용도인데, 남용하면 프로젝트 구조가 엉망이 될 수 있으니 주의해주세요.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<CategoryItemProps>`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 18px;
  font-weight: ${({ active }) => (active ? '600' : '400')};
  // color: ${({ active }) => (active ? '#42b6ff' : '#232323')};
  color: ${({ active }) => (active ? '#94bdd6' : '#232323')};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

// 자바스크립트 표준 API인 Object.prototype.entries 메서드는 객체의 열거 가능한 속성들을 [key, value] 쌍의 값들을 가진 배열을 반환하는 기능을 가지고 있습니다.
// 결국 배열을 반환하기 때문에 map 메서드를 호출할 수 있는데, 배열을 매개변수로 받기 때문에 위와 같이 작성할 수 있습니다.
const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <CategoryListWrapper className="inner-container">
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem
          to={`/?category=${name}`}
          active={name === selectedCategory}
          key={name}
        >
          #{name}({count})
        </CategoryItem>
      ))}
    </CategoryListWrapper>
  )
}

export default CategoryList
