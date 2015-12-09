Rails.application.routes.draw do
  root to: 'staticpages#index'

  namespace :api do
    resources :todos
  end
end
