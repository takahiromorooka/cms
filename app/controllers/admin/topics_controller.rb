module Admin
  class TopicsController < Admin::ApplicationController
    before_action :set_topic, only: [:edit, :update]
    before_action :set_categories, only: [:new, :edit, :update]

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
    end

    def edit
    end

    def update
      if @topic.update(thumbnail: params[:topic][:thumbnail])
        redirect_to edit_admin_topic_path(@topic)
      else
        render :edit
      end
    end

    private

    def set_topic
      @topic = Topic.find_by(id: params[:id])
    end

    def set_categories
      @categories = Category.get_category_as_json
    end

    def topic_form_params
      params.require(:topic_form).permit(
          :title,
          :status
      )
    end

  end
end
