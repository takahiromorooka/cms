Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resource :topics, only:  [:show, :create, :update]
      resources :categories, only: [:create, :update]
    end
  end
end
