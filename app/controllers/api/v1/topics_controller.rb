module Api
  module V1
    class TopicsController < Api::V1::ApplicationController
      before_action :set_topic, only: [:show, :update]


      def show
        render json: @topic, include: [:category]
      end

      def create
        topic = Topic.new(topic_params)
        # topic.thumbnail = params[:topics][:thumbnail]
        if topic.save
          render json: topic, include: [:category]
        else
          json_response(400, '保存に失敗しました。')
        end
      end

      def update
        if @topic.update(topic_params)
          json_response(200, '更新しました。')
        else
          json_response(400, '更新に失敗しました。')
        end
      end

      private

      def set_topic
        @topic = Topic.includes(:category).find_by(id: params[:id])
      end

      def topic_params
        params.require(:topics).permit(
            :title,
            :content,
            :description,
            :category_id,
            :status
        )
      end

    end
  end
end
