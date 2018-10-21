class PhotosController < ApplicationController
  before_action :set_photo, only: [:edit, :update]

  def index
    photos = Photo.all
    render json: photos, image_url: get_image_url
  end

  def create
    photo = Photo.create!(photo_params)
    url = url_for(photo.picture)
    # render json: {album: album, filename: "#{file}"}
    render json: photo, image_url: url
  end

  def edit
  end

private

  def set_photo
    @photo = Photo.find(params[:id])
  end

  def photo_params
    params.permit(:id, :title, :picture, :album_id)
  end

end
