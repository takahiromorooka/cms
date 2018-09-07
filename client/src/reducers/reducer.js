function editor_reducer(state={}, action) {
    switch(action.type) {
      case 'EDIT_TOPIC':
        return Object.assign({}, state, {
          title: action.title,
          content: action.content,
          description: action.description,
          thumbnail: action.thumbnail,
          image_src: action.image_src,
          category_id: action.category_id
        })
      default:
        return state
  }
}

export default editor_reducer
