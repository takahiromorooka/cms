module Admin
  class ApplicationController < ActionController::Base

    layout 'admin'
    protect_from_forgery with: :exception


    unless Rails.env.development?
      rescue_from Exception, with: :render_500
      rescue_from ActiveRecord::RecordNotFound, with: :render_404
      rescue_from ActionController::RoutingError, with: :render_404
    end

    def render_404(e = nil)
      render template: 'errors/error_404', status: 404, layout: 'no_header', content_type: 'text/html'
    end

    def render_500(e = nil)
      Raven.capture_exception(e)

      render template: 'errors/error_500', status: 500, layout: 'no_header', content_type: 'text/html'
    end

    def pc?
      case request.user_agent
        when /iPhone/i, /Android/i && /mobile/i, /Windows Phone/i
          return false
        else
          return true
      end

    end

    def sp?
      case request.user_agent
        when /iPhone/i, /Android/i && /mobile/i, /Windows Phone/i
          return true
        else
          return false
      end
    end

    private
    def switch_layout
      case request.user_agent
        when /iPhone/i, /Android/i && /mobile/i, /Windows Phone/i
          "sp"
        else
          "pc"
      end
    end

    def basic_auth
      authenticate_or_request_with_http_basic do |user, pass|
        user == 'be' && pass == 'passion' || user == 'BEGUEST' && pass == 'WorkTogether'
      end
    end

  end
end
