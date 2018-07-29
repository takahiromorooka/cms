class CategoryForm
  include ActiveModel::Model

  attr_accessor :name

  def search
    Category.ransack(
        name_cont: self.name
    ).result
  end

end
