# == Route Map
#
#                    Prefix Verb URI Pattern                                                                              Controller#Action
#                      root GET  /                                                                                        oceans#index
#                    oceans GET  /oceans(.:format)                                                                        oceans#index
#                oceans_new GET  /oceans/new(.:format)                                                                    oceans#new
#                     ocean GET  /oceans/:id(.:format)                                                                    oceans#show
#        rails_service_blob GET  /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET  /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET  /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT  /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  root :to => 'oceans#index'
  get '/oceans' => 'oceans#index'
  get '/oceans/new' => 'oceans#new' #get data
  post '/oceans' => 'oceans#create' #post data
  get '/oceans/:id' => 'oceans#show', :as => :ocean #will always be /ocean
  get '/oceans/:id/edit' => 'oceans#edit', :as => :ocean_edit
  post '/oceans/:id' => 'oceans#update', :as => :ocean_update
  delete '/oceans/:id' => 'oceans#destroy'
end
