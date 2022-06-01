import ContentLoader from 'react-content-loader'

type Props = {
  image?: boolean
}

function LoadingBlock({ image }: Props) {
  return (
    <ContentLoader
      className='pizza-block'
      speed={2}
      width={image ? 260 : 290}
      height={image ? 260 : 460}
      viewBox={`0 0 ${image ? '270 260' : '290 470'}`}
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <circle cx='132' cy='142' r='115' />
      {!image && <rect x='0' y='273' rx='6' ry='6' width='280' height='26' />}
      {!image && <rect x='0' y='310' rx='6' ry='6' width='280' height='84' />}
      {!image && <rect x='0' y='418' rx='6' ry='6' width='91' height='31' />}
      {!image && <rect x='137' y='408' rx='25' ry='25' width='140' height='46' />}
    </ContentLoader>
  )
}

export default LoadingBlock
