// node_module
import React, { PureComponent } from 'react'

function withLayout(params) {
  const {
    content
  } = params ? params : {}

  return class extends PureComponent {

    constructor(props) {
      super(props)
      this.state = {

      }
    }

    componentDidMount() {
    }

    render() {
      return(
        <Layout {...this.props}>
          {/*content*/}
        </Layout>
      )
    }
  }
}

const styles = {

}

export default withLayout