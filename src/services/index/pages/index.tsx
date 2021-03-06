import styled from '~/styled'
import Pikachu from '../components/Pikachu'
import { useStore } from '../store'
import Nav from '../components/Nav'

export default function PageIndex() {
  const store = useStore()

  return (
    <Layout>
        <Nav />
    </Layout>
  )
}

const Layout = styled.div`
  position: relative;
`;

const Container = styled.div`
  padding: 1rem;
`

const Title = styled.h1`
  font-size: 2rem;
  margin: 0 0 1rem;
`

const Line = styled.div`
  margin: .5rem 0 0;
  font-size: .875rem;
`

const Code = styled.div`
  font-family: monospace;
  display: inline-block;
  background-color: ${(props) => props.theme.blue[0]};
  color: ${(props) => props.theme.blue[8]};
  font-size: .75rem;
  border-radius: .125rem;
  padding: .0625rem .125rem;
  margin-right: .25rem;
  font-weight: 700;
`

const Author = styled.div`
  font-family: monospace;
  display: inline-block;
  background-color: ${(props) => props.theme.green[0]};
  color: ${(props) => props.theme.green[8]};
  font-size: .75rem;
  border-radius: .125rem;
  padding: .0625rem .125rem;
  margin-right: .25rem;
  font-weight: 700;
`
