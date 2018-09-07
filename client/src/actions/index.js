export function editTopic(title, content, description, thumbnail, image_src, category_id) {
  return {
    type: 'EDIT_TOPIC',
    title: title,
    content: content,
    description: description,
    thumbnail: thumbnail,
    image_src: image_src,
    category_id: category_id
  }
}
