import ContentLoader from 'react-content-loader'

const ImgLoader = () => (
  <ContentLoader viewBox="0 0 500 280" height={280} width={500}>
    <rect x="3" y="3" rx="10" ry="10" width="300" height="180" />
  </ContentLoader>
)

ImgLoader.metadata = {
  name: 'RJavlonbek',
  github: 'RJavlonbek',
  description: 'Blog item',
  filename: 'BlogItem',
}

export default ImgLoader;