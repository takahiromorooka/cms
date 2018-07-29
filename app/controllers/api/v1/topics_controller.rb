module Api
  module V1
    class TopicsController < Api::V1::ApplicationController

      def create
        topic = Topic.new(topic_params)
        # topic.thumbnail = params[:topics][:thumbnail]
        if topic.save
          json_response(200, '保存しました。')
        else
          json_response(400, '保存に失敗しました。')
        end
      end

      private

      def topic_params
        params.require(:topics).permit(
            :title,
            :content,
            :description,
            :category_id
        )
      end

    end
  end
end
