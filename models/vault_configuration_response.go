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

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
	"github.com/go-openapi/validate"
)

// VaultConfigurationResponse vault configuration response
//
// swagger:model vaultConfigurationResponse
type VaultConfigurationResponse struct {

	// approle
	// Required: true
	Approle *VaultConfigurationResponseApprole `json:"approle"`

	// endpoint
	// Required: true
	Endpoint *string `json:"endpoint"`

	// engine
	Engine string `json:"engine,omitempty"`

	// namespace
	Namespace string `json:"namespace,omitempty"`

	// prefix
	Prefix string `json:"prefix,omitempty"`

	// status
	Status *VaultConfigurationResponseStatus `json:"status,omitempty"`
}

// Validate validates this vault configuration response
func (m *VaultConfigurationResponse) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateApprole(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateEndpoint(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateStatus(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *VaultConfigurationResponse) validateApprole(formats strfmt.Registry) error {

	if err := validate.Required("approle", "body", m.Approle); err != nil {
		return err
	}

	if m.Approle != nil {
		if err := m.Approle.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("approle")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("approle")
			}
			return err
		}
	}

	return nil
}

func (m *VaultConfigurationResponse) validateEndpoint(formats strfmt.Registry) error {

	if err := validate.Required("endpoint", "body", m.Endpoint); err != nil {
		return err
	}

	return nil
}

func (m *VaultConfigurationResponse) validateStatus(formats strfmt.Registry) error {
	if swag.IsZero(m.Status) { // not required
		return nil
	}

	if m.Status != nil {
		if err := m.Status.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("status")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("status")
			}
			return err
		}
	}

	return nil
}

// ContextValidate validate this vault configuration response based on the context it is used
func (m *VaultConfigurationResponse) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateApprole(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateStatus(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *VaultConfigurationResponse) contextValidateApprole(ctx context.Context, formats strfmt.Registry) error {

	if m.Approle != nil {
		if err := m.Approle.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("approle")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("approle")
			}
			return err
		}
	}

	return nil
}

func (m *VaultConfigurationResponse) contextValidateStatus(ctx context.Context, formats strfmt.Registry) error {

	if m.Status != nil {
		if err := m.Status.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("status")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("status")
			}
			return err
		}
	}

	return nil
}

// MarshalBinary interface implementation
func (m *VaultConfigurationResponse) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *VaultConfigurationResponse) UnmarshalBinary(b []byte) error {
	var res VaultConfigurationResponse
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

// VaultConfigurationResponseApprole vault configuration response approle
//
// swagger:model VaultConfigurationResponseApprole
type VaultConfigurationResponseApprole struct {

	// engine
	Engine string `json:"engine,omitempty"`

	// id
	// Required: true
	ID *string `json:"id"`

	// retry
	Retry int64 `json:"retry,omitempty"`

	// secret
	// Required: true
	Secret *string `json:"secret"`
}

// Validate validates this vault configuration response approle
func (m *VaultConfigurationResponseApprole) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateID(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateSecret(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *VaultConfigurationResponseApprole) validateID(formats strfmt.Registry) error {

	if err := validate.Required("approle"+"."+"id", "body", m.ID); err != nil {
		return err
	}

	return nil
}

func (m *VaultConfigurationResponseApprole) validateSecret(formats strfmt.Registry) error {

	if err := validate.Required("approle"+"."+"secret", "body", m.Secret); err != nil {
		return err
	}

	return nil
}

// ContextValidate validates this vault configuration response approle based on context it is used
func (m *VaultConfigurationResponseApprole) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *VaultConfigurationResponseApprole) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *VaultConfigurationResponseApprole) UnmarshalBinary(b []byte) error {
	var res VaultConfigurationResponseApprole
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

// VaultConfigurationResponseStatus vault configuration response status
//
// swagger:model VaultConfigurationResponseStatus
type VaultConfigurationResponseStatus struct {

	// ping
	Ping int64 `json:"ping,omitempty"`
}

// Validate validates this vault configuration response status
func (m *VaultConfigurationResponseStatus) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this vault configuration response status based on context it is used
func (m *VaultConfigurationResponseStatus) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *VaultConfigurationResponseStatus) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *VaultConfigurationResponseStatus) UnmarshalBinary(b []byte) error {
	var res VaultConfigurationResponseStatus
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
