Rails.application.routes.draw do
  root to: :staticpages

  namespace :api do
    resources :todos
  end
end
