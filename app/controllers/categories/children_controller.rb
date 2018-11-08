module Categories
  class ChildrenController < ApplicationController

    def index

    end

    def show
      @topic = Topic.find_by!(id: params[:id])
    end
  end
end
