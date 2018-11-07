Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do

      get 'topics/set_related_topics', to: 'topics#set_related_topics', as: :set_related_topics
      resources :topics, only:  [:show, :create, :update]
      resources :categories, only: [:create, :update]
    end
  end
end
