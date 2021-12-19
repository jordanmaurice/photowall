import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import Main from './Main'
import { withRouter } from 'react-router'

function mapStateToProps(state) {
    return {
        posts: state,
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actions, dispatch)
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))

export default App