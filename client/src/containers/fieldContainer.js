import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchTranslations, fetchTranslationComments, saveComment} from '../actions/translationActions'
import CommentsComponent from '../components/comments'
import {fetchFieldById} from '../actions/fieldActions';
import TranslationComponent from '../components/translation'
import _ from 'lodash'

class FieldContainer extends Component {
  constructor(props) {
    super(props)
    this.saveComments = this
      .saveComments
      .bind(this)
    this.fet
  }
  componentDidMount() {
    this
      .props
      .fetchFieldById(this.props.match.params.id)
    this
      .props
      .fetchTranslations(this.props.match.params.id)
  }
  componentWillReceiveProps(newProp) {
    if (this.props.match.params.id != newProp.match.params.id) {
      this
        .props
        .fetchFieldById(this.props.match.params.id)
      this
        .props
        .fetchTranslations(this.props.match.params.id)
    }
  }

  saveComments(comment) {
    this
      .props
      .saveTranslationComment(comment)
      .then(i => {
        this
          .props
          .fetchTranslations(this.props.match.params.id)
      })
  }

  render() {
    let title = null
    let translations = null
    if (!_.isEmpty(this.props.field.field)) {
      title = this.props.field.field.name
    }
    if (this.props.translation.translationsState) {
      translations = this
        .props
        .translation
        .translations
        .filter(i => {
          return i.dbType === 1
        })
        .map(i => {
          return (<TranslationComponent
            key={i.id}
            translation={i}
            saveComment={this.saveComments}/>)
        })
    }

    return (
      <div>
        <h3>{title}</h3>
        {translations}
      </div>
    )
  }
}
function mapStateToProsp(state) {
  return {field: state.field, translation: state.translation};
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchTranslations: fetchTranslations,
    fetchFieldById: fetchFieldById,
    saveTranslationComment: saveComment
  }, dispatch);
}

export default connect(mapStateToProsp, mapDispatchToProps)(FieldContainer);