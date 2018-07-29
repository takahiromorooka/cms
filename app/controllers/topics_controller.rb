class TopicsController < ApplicationController

  def index
    if params[:topic_form].present?
      @topic_form = TopicForm.new(topic_form_params)
      @topics = @topic_form.search.order(id: 'DESC').page(params[:page])
    else
      @topic_form = TopicForm.new
      @topics = Topic.order(id: 'DESC').page(params[:page])
    end
  end

  def show

  end

  def new
    @categories = Category.get_category_as_json
  end

  def edit
  end

  private

  def topic_form_params
    params.require(:topic_form).permit(
        :title,
        :status
    )
  end

end
