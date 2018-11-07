require 'net/http'

module Api
  module V1
    class TopicsController < Api::V1::ApplicationController
      before_action :set_topic, only: [:show, :update]

      def set_related_topics
        topic = get_page_thumbnail(params[:url])

        render json: { topic: topic }
      end


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
            :status,
            :thumbnail
        )
      end

      def access_location_page(location, limit=10)
        for i in 0..limit
          location = location.gsub(/(\s|　)+/, '')
          location_escaped = URI.escape(location)
          uri = URI.parse(location_escaped)
          @response = Net::HTTP.start(uri.host, uri.port, use_ssl: uri.scheme == 'https') do |http|
            http.open_timeout = 5
            http.read_timeout = 10
            http.get(uri.request_uri, 'User-Agent' => 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36')
          end
          return @response
        end
        raise ArgumentError, 'too many HTTP redirects'
      end

      def get_page_thumbnail(location, limit = 10)
        @response = access_location_page(location, limit)

        case @response
        when Net::HTTPSuccess
          doc = Nokogiri::HTML(@response.body)
          topic_thumbnail = doc.css('//meta[property="og:image"]/@content').to_s
          topic_thumbnail = topic_thumbnail.blank? ? '' : topic_thumbnail
          title = doc.title
          title = title.blank? ? location : title
          topic_description = doc.css('//meta[property="og:description"]/@content').to_s
          topic_description =  topic_description.blank? ? location : topic_description

          topic = { thumbnail: topic_thumbnail, title: title, description: topic_description }
          return  topic
        when Net::HTTPRedirection
          return ''
        else
          return ''
        end


      end


    end
  end
end
