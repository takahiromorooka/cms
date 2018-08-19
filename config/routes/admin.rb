Rails.application.routes.draw do
  namespace :admin do
    root to: 'topics#index'
    resources :topics
    resources :categories
  end
end
