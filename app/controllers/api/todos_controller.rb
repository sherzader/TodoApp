class Api::TodosController < ApplicationController
  def create
  end

  def update
  end

  def destroy
  end

  private
  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end
end
