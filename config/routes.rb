Rails.application.routes.draw do
  resources :recipes
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get "about", to: "static#about"

  root to: "static#index"
end

