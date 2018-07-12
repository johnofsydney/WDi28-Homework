class WritersController < ApplicationController
  def homepage

   end

  def index
    @writers = Writer.all
  end

  def show
    @writer = Writer.find params[:id]
  end

  def edit
    @writer = Writer.find params[:id]
  end

  def new
    @writer = Writer.new
  end

  def update
    writer = Writer.find params[:id]
    writer.update writer_params
    redirect_to writer
  end

  def create
    writer = Writer.create writer_params
    redirect_to writer # get show page
  end

  def destroy
     writer = Writer.find params[:id]
    writer.destroy
     redirect_to writers_path
  end
  private

  def writer_params
    params.require(:writer).permit(:name, :nationality, :dob, :epoch, :image)
  end
end
