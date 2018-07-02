module TopicsHelper

  def topic_image_helper(topic)
    return raw(image_tag 'noimage.png', class: 'image')
    # if topic.nil? || topic.filename.blank?

    raw(image_tag('noimage.png', 'data-original': t_ele.image_path, class: 'lazyload image'))
  end


  def topic_status_choice_helper
    [
        ["下書き", Topic::Status::DRAFT],
        ["公開", Topic::Status::PUBLISHED]
    ]
  end

  def topic_status_name_helper(topic_status)
    case topic_status
      when Topic::Status::DRAFT
        return 'Draft'
    end
    ''
  end
end
