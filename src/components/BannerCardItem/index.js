import './index.css'

const Component = props => {
  const {bannerCardsList} = props
  console.log(bannerCardsList)

  return bannerCardsList.map(item => (
    <li className={`${item.className} card`} key={item.id}>
      <div>
        <h1 className="heading">{item.headerText}</h1>
        <p className="para">{item.description}</p>
        <button type="button" className="button">
          Show More
        </button>
      </div>
    </li>
  ))
}

export default Component
