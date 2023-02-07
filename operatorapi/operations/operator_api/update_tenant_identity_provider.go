// Code generated by go-swagger; DO NOT EDIT.

// This file is part of MinIO Console Server
// Copyright (c) 2023 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//

package operator_api

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the generate command

import (
	"net/http"

	"github.com/go-openapi/runtime/middleware"

	"github.com/minio/console/models"
)

// UpdateTenantIdentityProviderHandlerFunc turns a function with the right signature into a update tenant identity provider handler
type UpdateTenantIdentityProviderHandlerFunc func(UpdateTenantIdentityProviderParams, *models.Principal) middleware.Responder

// Handle executing the request and returning a response
func (fn UpdateTenantIdentityProviderHandlerFunc) Handle(params UpdateTenantIdentityProviderParams, principal *models.Principal) middleware.Responder {
	return fn(params, principal)
}

// UpdateTenantIdentityProviderHandler interface for that can handle valid update tenant identity provider params
type UpdateTenantIdentityProviderHandler interface {
	Handle(UpdateTenantIdentityProviderParams, *models.Principal) middleware.Responder
}

// NewUpdateTenantIdentityProvider creates a new http.Handler for the update tenant identity provider operation
func NewUpdateTenantIdentityProvider(ctx *middleware.Context, handler UpdateTenantIdentityProviderHandler) *UpdateTenantIdentityProvider {
	return &UpdateTenantIdentityProvider{Context: ctx, Handler: handler}
}

/*
	UpdateTenantIdentityProvider swagger:route POST /namespaces/{namespace}/tenants/{tenant}/identity-provider OperatorAPI updateTenantIdentityProvider

Update Tenant Identity Provider
*/
type UpdateTenantIdentityProvider struct {
	Context *middleware.Context
	Handler UpdateTenantIdentityProviderHandler
}

func (o *UpdateTenantIdentityProvider) ServeHTTP(rw http.ResponseWriter, r *http.Request) {
	route, rCtx, _ := o.Context.RouteInfo(r)
	if rCtx != nil {
		*r = *rCtx
	}
	var Params = NewUpdateTenantIdentityProviderParams()
	uprinc, aCtx, err := o.Context.Authorize(r, route)
	if err != nil {
		o.Context.Respond(rw, r, route.Produces, route, err)
		return
	}
	if aCtx != nil {
		*r = *aCtx
	}
	var principal *models.Principal
	if uprinc != nil {
		principal = uprinc.(*models.Principal) // this is really a models.Principal, I promise
	}

	if err := o.Context.BindValidRequest(r, route, &Params); err != nil { // bind params
		o.Context.Respond(rw, r, route.Produces, route, err)
		return
	}

	res := o.Handler.Handle(Params, principal) // actually handle the request
	o.Context.Respond(rw, r, route.Produces, route, res)

}
