class CategoriesController < ApplicationController

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

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def category_params
    params.require(:category).permit(
        :name,
        :parent_id,
        :alias
    )
  end

  def category_form_params
    params.require(:category_form).permit(
        :name
        )
  end

end
