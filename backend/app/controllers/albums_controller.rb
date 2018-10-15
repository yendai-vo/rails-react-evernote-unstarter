class AlbumsController < ApplicationController
  def index
  end

  def show
  end

  def new
  end

  def create
    album = Album.create!(album_params)
    render json: album
  end

  def edit
  end

private

  def album_params
    params.permit(:id, :name, :description, :picture)
  end
end
