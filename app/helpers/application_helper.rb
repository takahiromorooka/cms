module ApplicationHelper

  def markdown_helper(content)
    return "" if content.blank?
    options = {
        filter_html: true,
        hard_wrap: true,
        space_after_headers: true
    }

    extensions = {
        autolink: true,
        no_intra_emphasis: true,
        fenced_code_blocks: true
    }

    renderer = Redcarpet::Render::HTML.new(options)
    markdown = Redcarpet::Markdown.new(renderer, extensions)

    raw("<div class='markdown-contents'>#{markdown.render(content).html_safe}</div>")
  end


  def set_image_helper(image)
    return image_tag('noimage.png', class: 'image') if image.blank?

    image_tag(image.url, class: 'image')
  end

end
