module Api
  module V1
    class TopicsController < Api::V1::ApplicationController

      def create
        topic = Topic.new(topic_params)

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
            thumbnail: []
        )
      end

    end
  end
end
