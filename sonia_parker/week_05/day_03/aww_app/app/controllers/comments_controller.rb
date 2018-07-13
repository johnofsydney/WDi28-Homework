class CommentsController < ApplicationController
  def index
    @comments = Comment.all
  end

  def new
  end

  def edit
      @comment = Comment.find params[:id]
  end

  def create
  end

  def update
      @comment = Comment.find params[:id]
  end

  def show
    @comment = Comment.find params[:id]
  end

  def delete
      @comment = Comment.find params[:id]
  end
end
