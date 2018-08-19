module MetaInfoHelper
  def meta_tags_helper(filename)
    if filename.blank?
      render partial: '/meta/default'
    else
      render partial: "/meta/#{filename}"
    end
  end
end