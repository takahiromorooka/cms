Rails.application.routes.draw do
  namespace :admin do
    root 'topics#index'
    resources :topics
    resources :categories
  end

end
