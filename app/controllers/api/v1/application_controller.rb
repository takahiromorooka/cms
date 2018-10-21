module Api
  module V1
    class ApplicationController < ActionController::Base
      protect_from_forgery with: :null_session
      skip_before_action :verify_authenticity_token

      unless Rails.env.development?
        rescue_from Exception,                        with: :render_500
        rescue_from ActiveRecord::RecordNotFound,     with: :render_404
        rescue_from ActionController::RoutingError,   with: :render_404
      end

      def routing_error
        raise ActionController::RoutingError, params[:path]
      end

      def render_404(e = nil)
        json_response(404, '404 Not Found.')
      end

      def render_500(e = nil)
        json_response(500, 'Internal Server Error Occured.')
      end

      def json_response(status, data)
        render json: { status: status, data: data }, status: status
      end

      def error_format(error_message: nil, content: nil)
        { error_message: error_message, content: content }
      end

      private
      def not_authenticated
        json_response(403, 'Not Authorized.')
      end
    end
  end
end
