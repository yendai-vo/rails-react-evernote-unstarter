class PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]
  
  def index
    @posts = Post.all
  end

  def show
  end

  def new
  end

  def edit
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def params_post
    params.require(:post).permit(:id, :image, :title, :description, :user_id, tag_ids: [])
  end
end
