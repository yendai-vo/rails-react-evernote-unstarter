class TagsController < ApplicationController
  before_action :set_tag, only: [:show, :edit, :update, :destroy]

  def index
    @tags = Tag.all
  end

  def show
  end

  def new
  end

  def edit
  end

  private

  def set_tag
    @tag = Tag.find(params[:id])
  end

  def params_tag
    params.require(:tag).permit(:id, :word)
  end
end
