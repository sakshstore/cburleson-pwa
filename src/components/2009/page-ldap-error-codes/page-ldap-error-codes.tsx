import { Component, h } from '@stencil/core';

import { BlogData } from '../../../services/blog-data';

import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-ldap-error-codes',
})
export class PageLdapErrorCodes {

    title = 'Blog';

    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PageLdapErrorCodes.componentWillLoad');
        }

        let id = document.location.pathname.substr(1);
        this.header = BlogData.getPostHeaderById(id);

        document.title = this.header.title + ' | ' + EnvironmentConfigService.getInstance().get('siteName');
    }

    render() {
        return [
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-buttons slot="start">
                        <ion-back-button defaultHref="/" />
                    </ion-buttons>
                    <ion-title>Blog</ion-title>
                </ion-toolbar>
            </ion-header>,

            <ion-content class="ion-padding">

                <ion-grid>
                    <ion-row>
                        <ion-col size-xs="12" size-sm="12" size-md="8" size-lg="8" size-xl="7">
                            <h1>{this.header.title}</h1>
                            <app-entry-meta header={this.header} />

                            <table class="table table-bordered table-striped" role="grid">
                                <thead>
                                    <tr role="row">
                                        <th>ERROR CODE</th>
                                        <th>LDAPEXCEPTION CONSTANT</th>
                                        <th>POSSIBLE CAUSE(S)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr role="row">
                                        <td>0</td>
                                        <td>SUCCESS</td>
                                        <td>The operation completed successfully</td>
                                    </tr>
                                    <tr role="row">
                                        <td>1</td>
                                        <td>OPERATION_ERROR</td>
                                        <td>Invalid syntax for ACI or schema, or inappropriate control for the operation</td>
                                    </tr>
                                    <tr role="row">
                                        <td>2</td>
                                        <td>PROTOCOL_ERROR</td>
                                        <td>Invalid filter expression on search, or DN on add, modify, or delete</td>
                                    </tr>
                                    <tr role="row">
                                        <td>3</td>
                                        <td>TIME_LIMIT_EXCEEDED</td>
                                        <td>Either the server&#8217;s or the client&#8217;s specified search time limit was exceeded</td>
                                    </tr>
                                    <tr role="row">
                                        <td>4</td>
                                        <td>SIZE_LIMIT_EXCEEDED</td>
                                        <td>Either the server&#8217;s or the client&#8217;s specified limit on number of search results was exceeded</td>
                                    </tr>
                                    <tr role="row">
                                        <td>5</td>
                                        <td>COMPARE_FALSE</td>
                                        <td>A compare operation returns mismatch</td>
                                    </tr>
                                    <tr role="row">
                                        <td>6</td>
                                        <td>COMPARE_TRUE</td>
                                        <td>A compare operation returns match</td>
                                    </tr>
                                    <tr role="row">
                                        <td>7</td>
                                        <td>AUTH_METHOD_NOT_SUPPORTED</td>
                                        <td>The server does not support the requested authentication method</td>
                                    </tr>
                                    <tr role="row">
                                        <td>8</td>
                                        <td>STRONG_AUTH_REQUIRED</td>
                                        <td>The server requires an authentication method stronger than unencrypted user name and password</td>
                                    </tr>
                                    <tr role="row">
                                        <td>9</td>
                                        <td>LDAP_PARTIAL_RESULTS</td>
                                        <td>The client has bound with LDAPv2, or the server supports only LDAPv2, and the base DN specified by the client is not among the naming contexts of the server</td>
                                    </tr>
                                    <tr role="row">
                                        <td>10</td>
                                        <td>REFERRAL</td>
                                        <td>The server is configured to return a referral or search reference when an operation is directed toward this DN</td>
                                    </tr>
                                    <tr role="row">
                                        <td>11</td>
                                        <td>ADMIN_LIMIT_EXCEEDED</td>
                                        <td>To satisfy the search request, the server would need to process too many entries; the search may need to be narrowed, or the server&#8217;s look-through limit raised</td>
                                    </tr>
                                    <tr role="row">
                                        <td>12</td>
                                        <td>UNAVAILABLE_CRITICAL_EXTENSION</td>
                                        <td>A control was provided with the request; the control was tagged as critical, but the server doesn&#8217;t support it</td>
                                    </tr>
                                    <tr role="row">
                                        <td>13</td>
                                        <td>CONFIDENTIALITY_REQUIRED</td>
                                        <td>.</td>
                                    </tr>
                                    <tr role="row">
                                        <td>14</td>
                                        <td>SASL_BIND_IN_PROGRESS</td>
                                        <td>SASL authentication is being negotiated between the client and the server</td>
                                    </tr>
                                    <tr role="row">
                                        <td>16</td>
                                        <td>NO_SUCH_ATTRIBUTE</td>
                                        <td>An attribute to be modified or deleted was not present in the entry</td>
                                    </tr>
                                    <tr role="row">
                                        <td>17</td>
                                        <td>UNDEFINED_ATTRIBUTE_TYPE</td>
                                        <td>.</td>
                                    </tr>
                                    <tr role="row">
                                        <td>18</td>
                                        <td>INAPPROPRIATE_MATCHING</td>
                                        <td>.</td>
                                    </tr>
                                    <tr role="row">
                                        <td>19</td>
                                        <td>CONSTRAINT_VIOLATION</td>
                                        <td>Invalid attribute for this entry, or new password does not meet password policy requirements</td>
                                    </tr>
                                    <tr role="row">
                                        <td>20</td>
                                        <td>ATTRIBUTE_OR_VALUE_EXISTS</td>
                                        <td>Attempt to add an identical attribute value to an existing one</td>
                                    </tr>
                                    <tr role="row">
                                        <td>21</td>
                                        <td>INVALID_ATTRIBUTE_SYNTAX</td>
                                        <td>.</td>
                                    </tr>
                                    <tr role="row">
                                        <td>32</td>
                                        <td>NO_SUCH_OBJECT</td>
                                        <td>Attempt to bind with a nonexistent DN, to search with a nonexistent base DN, or to modify or delete a nonexistent DN</td>
                                    </tr>
                                    <tr role="row">
                                        <td>33</td>
                                        <td>ALIAS_PROBLEM</td>
                                        <td>.</td>
                                    </tr>
                                    <tr role="row">
                                        <td>34</td>
                                        <td>INVALID_DN_SYNTAX</td>
                                        <td>Invalid DN or RDN specified on adding an entry or modifying an RDN</td>
                                    </tr>
                                    <tr role="row">
                                        <td>35</td>
                                        <td>IS_LEAF</td>
                                        <td>.</td>
                                    </tr>
                                    <tr role="row">
                                        <td>36</td>
                                        <td>ALIAS_DEREFERENCING_PROBLEM</td>
                                        <td>.</td>
                                    </tr>
                                    <tr role="row">
                                        <td>48</td>
                                        <td>INAPPROPRIATE_AUTHENTICATION</td>
                                        <td>.</td>
                                    </tr>
                                    <tr role="row">
                                        <td>49</td>
                                        <td>INVALID_CREDENTIALS</td>
                                        <td>Invalid password or other credentials supplied on bind</td>
                                    </tr>
                                    <tr role="row">
                                        <td>50</td>
                                        <td>INSUFFICIENT_ACCESS_RIGHTS</td>
                                        <td>.</td>
                                    </tr>
                                    <tr role="row">
                                        <td>51</td>
                                        <td>BUSY</td>
                                        <td>.</td>
                                    </tr>
                                    <tr role="row">
                                        <td>52</td>
                                        <td>UNAVAILABLE</td>
                                        <td>Returned by SDK if server is not accessible</td>
                                    </tr>
                                    <tr role="row">
                                        <td>53</td>
                                        <td>UNWILLING_TO_PERFORM</td>
                                        <td>User not allowed to change password, password expired, operation not implemented (moddn), attempt to modify read-only attribute, attempt to delete all schema elements, attempt to delete an object class that has derived object classes, attempt to delete a read-only schema element, the database is read-only, no back end (database) is available for the operation, or other uncategorized error</td>
                                    </tr>
                                    <tr role="row">
                                        <td>54</td>
                                        <td>LOOP_DETECT</td>
                                        <td>.</td>
                                    </tr>
                                    <tr role="row">
                                        <td>64</td>
                                        <td>NAMING_VIOLATION</td>
                                        <td>.</td>
                                    </tr>
                                    <tr role="row">
                                        <td>65</td>
                                        <td>OBJECT_CLASS_VIOLATION</td>
                                        <td>Invalid attribute specified for modify operation on an entry</td>
                                    </tr>
                                    <tr role="row">
                                        <td>66</td>
                                        <td>NOT_ALLOWED_ON_NONLEAF</td>
                                        <td>Attempt to delete an entry that has child nodes</td>
                                    </tr>
                                    <tr role="row">
                                        <td>67</td>
                                        <td>NOT_ALLOWED_ON_RDN</td>
                                        <td>.</td>
                                    </tr>
                                    <tr role="row">
                                        <td>68</td>
                                        <td>ENTRY_ALREADY_EXISTS</td>
                                        <td>.</td>
                                    </tr>
                                    <tr role="row">
                                        <td>69</td>
                                        <td>OBJECT_CLASS_MODS_PROHIBITED</td>
                                        <td>.</td>
                                    </tr>
                                    <tr role="row">
                                        <td>71</td>
                                        <td>AFFECTS_MULTIPLE_DSAS</td>
                                        <td>.</td>
                                    </tr>
                                    <tr role="row">
                                        <td>80</td>
                                        <td>OTHER</td>
                                        <td>.</td>
                                    </tr>
                                    <tr role="row">
                                        <td>81</td>
                                        <td>SERVER_DOWN</td>
                                        <td>SDK could not connect to server</td>
                                    </tr>
                                    <tr role="row">
                                        <td>89</td>
                                        <td>PARAM_ERROR</td>
                                        <td>No modifications on a modify operation, no attributes on an add operation, invalid scope or empty search filter on search, or other invalid argument to an SDK method</td>
                                    </tr>
                                    <tr role="row">
                                        <td>91</td>
                                        <td>CONNECT_ERROR</td>
                                        <td>SDK reports unexpected error connecting to server</td>
                                    </tr>
                                    <tr role="row">
                                        <td>92</td>
                                        <td>LDAP_NOT_SUPPORTED</td>
                                        <td>.</td>
                                    </tr>
                                    <tr role="row">
                                        <td>93</td>
                                        <td>CONTROL_NOT_FOUND</td>
                                        <td>.</td>
                                    </tr>
                                    <tr role="row">
                                        <td>94</td>
                                        <td>NO_RESULTS_RETURNED</td>
                                        <td>.</td>
                                    </tr>
                                    <tr role="row">
                                        <td>95</td>
                                        <td>MORE_RESULTS_TO_RETURN</td>
                                        <td>.</td>
                                    </tr>
                                    <tr role="row">
                                        <td>96</td>
                                        <td>CLIENT_LOOP</td>
                                        <td>.</td>
                                    </tr>
                                    <tr role="row">
                                        <td>97</td>
                                        <td>REFERRAL_LIMIT_EXCEEDED</td>
                                        <td>SDK reports hop limit exceeded on referral processing</td>
                                    </tr>
                                </tbody>
                            </table>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                            <gls-adsense-ad />
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}