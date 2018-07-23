class SheltersController < ApplicationController
  def create
    shelter = Shelter.create shelter_params
    redirect_to shelter
  end

  def new
    @shelter = Shelter.new
  end

  def index
    @shelters = Shelter.all
  end

  def show
    @shelter = Shelter.find params[:id]
  end

  def edit
    @shelter = Shelter.find params[:id]
  end

  def update
    shelter = Shelter.find params[:id]
    shelter.update shelter_params
    redirect_to shelter
  end

  def destroy
    Shelter.find(params[:id]).destroy

    redirect_to shelters_path
  end

  private
    def shelter_params
      params.require(:shelter).permit(:name, :postcode, :type_name, :image)
    end
end
