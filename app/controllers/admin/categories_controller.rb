module Admin
  class CategoriesController < Admin::ApplicationController

    def index
      @category = Category.new
      if params[:category_form].present?
        @category_form = CategoryForm.new(category_form_params)
        @categories = @category_form.search.order(id: 'DESC').page(params[:page])
      else
        @category_form = CategoryForm.new
        @categories = Category.order(id: 'DESC').page(params[:page])
      end
    end


    def show
    end

    def new
    end

    def create
      @category = Category.new(category_params)
      if @category.save
        redirect_to admin_categories_path, notice: '保存に成功しました。'
      else
        flash[:alert] = '保存に失敗しました。'
        redirect_to admin_categories_path
      end
    end

    def edit
    end

    def update
      category = Category.find_by!(id: params[:id])
      if category.update(category_params)
        redirect_to admin_categories_path, notice: '変更に成功しました。'
      else
        flash[:alert] = '変更に失敗しました。'
        redirect_to admin_categories_path
      end
    end

    def destroy
    end

    private

    def category_params
      params.require(:category).permit(
          :name,
          :description,
          :parent_id,
          :alias,
          :thumbnail

      )
    end

    def category_form_params
      params.require(:category_form).permit(
          :name
      )
    end

  end
end
