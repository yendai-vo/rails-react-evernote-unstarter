class AlbumsController < ApplicationController
  def index
    albums = Album.all
    render json: albums, image_url: get_image_url
  end

  def show
  end

  def new
  end

  def create
    # debugger
    album = Album.create!(album_params)
    # file = params[:picture].tempfile.path
    url = url_for(album.picture)
    # render json: {album: album, filename: "#{file}"}
    render json:  album, image_url: url
  end

  def edit
  end

  def destroy
    Album.find(params[:id]).destroy
  end

private

  def album_params
    params.permit(:id, :name, :description, :picture, :user_id)
  end
end
