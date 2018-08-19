class ActionDispatch::Routing::Mapper
  def draw(routes_name)
    instance_eval(File.read(Rails.root.join("config/routes/#{routes_name}.rb")))
  end
end

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'pages#index'

  draw :api_v1
  draw :admin

  get ':category_alias', to: 'categories#index', as: :category
  get ':category_alias/:child_category_alias', to: 'categories/children#index', as: :child_category
  get ':category_alias/:child_category_alias/:id', to: 'categories/children#show', as: :article



end
