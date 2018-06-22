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
end
