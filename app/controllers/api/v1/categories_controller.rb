module Api
  module V1
    class CategoriesController < Api::V1::ApplicationController

      def create
        @category = Category.new(category_params)
        if @category.save
          json_response(200, '保存に成功oしました。')
        else
          json_response(400, '保存に失敗しました。')
        end
      end

      def update

      end

      def destroy

      end


      private

      def category_params
        params.require(:category).permit(
            :name,
            :description,
            :thumbnail,
            :parent_id,
            :alias
        )
      end
    end
  end
end
