

function ContentTitle({activeCategory}: {activeCategory: string}){
    return <h2 className={'content__title'}>{activeCategory ? activeCategory : "All"} pizzas</h2>
}

export default ContentTitle