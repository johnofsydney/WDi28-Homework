# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                   players GET    /players(.:format)                                                                       players#index
#                           POST   /players(.:format)                                                                       players#create
#                new_player GET    /players/new(.:format)                                                                   players#new
#               edit_player GET    /players/:id/edit(.:format)                                                              players#edit
#                    player GET    /players/:id(.:format)                                                                   players#show
#                           PATCH  /players/:id(.:format)                                                                   players#update
#                           PUT    /players/:id(.:format)                                                                   players#update
#                           DELETE /players/:id(.:format)                                                                   players#destroy
#                     clubs GET    /clubs(.:format)                                                                         clubs#index
#                           POST   /clubs(.:format)                                                                         clubs#create
#                  new_club GET    /clubs/new(.:format)                                                                     clubs#new
#                 edit_club GET    /clubs/:id/edit(.:format)                                                                clubs#edit
#                      club GET    /clubs/:id(.:format)                                                                     clubs#show
#                           PATCH  /clubs/:id(.:format)                                                                     clubs#update
#                           PUT    /clubs/:id(.:format)                                                                     clubs#update
#                           DELETE /clubs/:id(.:format)                                                                     clubs#destroy
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  resources :players
  resources :clubs
end
