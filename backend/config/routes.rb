Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :create]
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile'
    end
  end
  resources :albums
  resources :photos
  resources :comments
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
