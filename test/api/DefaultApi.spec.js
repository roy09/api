/**
 * API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Api);
  }
}(this, function(expect, Api) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Api.DefaultApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DefaultApi', function() {
    describe('checkingUrlIdByUrlIdGet', function() {
      it('should call checkingUrlIdByUrlIdGet successfully', function(done) {
        //uncomment below and update the code to test checkingUrlIdByUrlIdGet
        //instance.checkingUrlIdByUrlIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('doesHaveCVByStaffIdGet', function() {
      it('should call doesHaveCVByStaffIdGet successfully', function(done) {
        //uncomment below and update the code to test doesHaveCVByStaffIdGet
        //instance.doesHaveCVByStaffIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('doesHavePhotoByStaffIdGet', function() {
      it('should call doesHavePhotoByStaffIdGet successfully', function(done) {
        //uncomment below and update the code to test doesHavePhotoByStaffIdGet
        //instance.doesHavePhotoByStaffIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllStaffIdsGet', function() {
      it('should call getAllStaffIdsGet successfully', function(done) {
        //uncomment below and update the code to test getAllStaffIdsGet
        //instance.getAllStaffIdsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getApproachOptionsByDomainIdGet', function() {
      it('should call getApproachOptionsByDomainIdGet successfully', function(done) {
        //uncomment below and update the code to test getApproachOptionsByDomainIdGet
        //instance.getApproachOptionsByDomainIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAuthorDetailsByStaffIdGet', function() {
      it('should call getAuthorDetailsByStaffIdGet successfully', function(done) {
        //uncomment below and update the code to test getAuthorDetailsByStaffIdGet
        //instance.getAuthorDetailsByStaffIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAuthorsNewKeywordsByStaffIdAndNewKeywordGroupIdGet', function() {
      it('should call getAuthorsNewKeywordsByStaffIdAndNewKeywordGroupIdGet successfully', function(done) {
        //uncomment below and update the code to test getAuthorsNewKeywordsByStaffIdAndNewKeywordGroupIdGet
        //instance.getAuthorsNewKeywordsByStaffIdAndNewKeywordGroupIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBookSellingLinksByStaffIdGet', function() {
      it('should call getBookSellingLinksByStaffIdGet successfully', function(done) {
        //uncomment below and update the code to test getBookSellingLinksByStaffIdGet
        //instance.getBookSellingLinksByStaffIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBuildingByDomainIdModeByStaffIdAndDomainIdGet', function() {
      it('should call getBuildingByDomainIdModeByStaffIdAndDomainIdGet successfully', function(done) {
        //uncomment below and update the code to test getBuildingByDomainIdModeByStaffIdAndDomainIdGet
        //instance.getBuildingByDomainIdModeByStaffIdAndDomainIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBuildingByOrgUnitCodeModeByStaffIdAndOrgUnitCodeGet', function() {
      it('should call getBuildingByOrgUnitCodeModeByStaffIdAndOrgUnitCodeGet successfully', function(done) {
        //uncomment below and update the code to test getBuildingByOrgUnitCodeModeByStaffIdAndOrgUnitCodeGet
        //instance.getBuildingByOrgUnitCodeModeByStaffIdAndOrgUnitCodeGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCentreListForStaffByStaffIdGet', function() {
      it('should call getCentreListForStaffByStaffIdGet successfully', function(done) {
        //uncomment below and update the code to test getCentreListForStaffByStaffIdGet
        //instance.getCentreListForStaffByStaffIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCollaboratorByStaffIdGet', function() {
      it('should call getCollaboratorByStaffIdGet successfully', function(done) {
        //uncomment below and update the code to test getCollaboratorByStaffIdGet
        //instance.getCollaboratorByStaffIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCountryOptionsByDomainIdGet', function() {
      it('should call getCountryOptionsByDomainIdGet successfully', function(done) {
        //uncomment below and update the code to test getCountryOptionsByDomainIdGet
        //instance.getCountryOptionsByDomainIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCurrentGrantSizeByStaffIdGet', function() {
      it('should call getCurrentGrantSizeByStaffIdGet successfully', function(done) {
        //uncomment below and update the code to test getCurrentGrantSizeByStaffIdGet
        //instance.getCurrentGrantSizeByStaffIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDepartmentMembersByCodeGet', function() {
      it('should call getDepartmentMembersByCodeGet successfully', function(done) {
        //uncomment below and update the code to test getDepartmentMembersByCodeGet
        //instance.getDepartmentMembersByCodeGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDesciplineOptionsPost', function() {
      it('should call getDesciplineOptionsPost successfully', function(done) {
        //uncomment below and update the code to test getDesciplineOptionsPost
        //instance.getDesciplineOptionsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDomainMembersByDomainIdGet', function() {
      it('should call getDomainMembersByDomainIdGet successfully', function(done) {
        //uncomment below and update the code to test getDomainMembersByDomainIdGet
        //instance.getDomainMembersByDomainIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDomainMembersWithExpertiseInfoByDomainIdGet', function() {
      it('should call getDomainMembersWithExpertiseInfoByDomainIdGet successfully', function(done) {
        //uncomment below and update the code to test getDomainMembersWithExpertiseInfoByDomainIdGet
        //instance.getDomainMembersWithExpertiseInfoByDomainIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDomainOptionsGet', function() {
      it('should call getDomainOptionsGet successfully', function(done) {
        //uncomment below and update the code to test getDomainOptionsGet
        //instance.getDomainOptionsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getExpertiseDetailsByStaffIdGet', function() {
      it('should call getExpertiseDetailsByStaffIdGet successfully', function(done) {
        //uncomment below and update the code to test getExpertiseDetailsByStaffIdGet
        //instance.getExpertiseDetailsByStaffIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGrantDetailsByStaffIdGet', function() {
      it('should call getGrantDetailsByStaffIdGet successfully', function(done) {
        //uncomment below and update the code to test getGrantDetailsByStaffIdGet
        //instance.getGrantDetailsByStaffIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGrantSizeByStaffIdGet', function() {
      it('should call getGrantSizeByStaffIdGet successfully', function(done) {
        //uncomment below and update the code to test getGrantSizeByStaffIdGet
        //instance.getGrantSizeByStaffIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGrantsForCentreByCentreIdGet', function() {
      it('should call getGrantsForCentreByCentreIdGet successfully', function(done) {
        //uncomment below and update the code to test getGrantsForCentreByCentreIdGet
        //instance.getGrantsForCentreByCentreIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getHonoursProjectByProjIdGet', function() {
      it('should call getHonoursProjectByProjIdGet successfully', function(done) {
        //uncomment below and update the code to test getHonoursProjectByProjIdGet
        //instance.getHonoursProjectByProjIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getHonoursSupervisorByStaffIdGet', function() {
      it('should call getHonoursSupervisorByStaffIdGet successfully', function(done) {
        //uncomment below and update the code to test getHonoursSupervisorByStaffIdGet
        //instance.getHonoursSupervisorByStaffIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getHrPersonByStaffIdGet', function() {
      it('should call getHrPersonByStaffIdGet successfully', function(done) {
        //uncomment below and update the code to test getHrPersonByStaffIdGet
        //instance.getHrPersonByStaffIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getKeywordOptionsByDomainIdGet', function() {
      it('should call getKeywordOptionsByDomainIdGet successfully', function(done) {
        //uncomment below and update the code to test getKeywordOptionsByDomainIdGet
        //instance.getKeywordOptionsByDomainIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMediaKeywordsByStaffIdGet', function() {
      it('should call getMediaKeywordsByStaffIdGet successfully', function(done) {
        //uncomment below and update the code to test getMediaKeywordsByStaffIdGet
        //instance.getMediaKeywordsByStaffIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMembersByCodeAndJobTypeByCodeAndJobTypeGet', function() {
      it('should call getMembersByCodeAndJobTypeByCodeAndJobTypeGet successfully', function(done) {
        //uncomment below and update the code to test getMembersByCodeAndJobTypeByCodeAndJobTypeGet
        //instance.getMembersByCodeAndJobTypeByCodeAndJobTypeGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMembersByCodeListAndJobTypePost', function() {
      it('should call getMembersByCodeListAndJobTypePost successfully', function(done) {
        //uncomment below and update the code to test getMembersByCodeListAndJobTypePost
        //instance.getMembersByCodeListAndJobTypePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMembersByDomainAndJobTypeByDomainIdAndJobTypeGet', function() {
      it('should call getMembersByDomainAndJobTypeByDomainIdAndJobTypeGet successfully', function(done) {
        //uncomment below and update the code to test getMembersByDomainAndJobTypeByDomainIdAndJobTypeGet
        //instance.getMembersByDomainAndJobTypeByDomainIdAndJobTypeGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMembersByDomainListAndJobTypePost', function() {
      it('should call getMembersByDomainListAndJobTypePost successfully', function(done) {
        //uncomment below and update the code to test getMembersByDomainListAndJobTypePost
        //instance.getMembersByDomainListAndJobTypePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNewKeywordsByGroupByNewKeywordGroupIdGet', function() {
      it('should call getNewKeywordsByGroupByNewKeywordGroupIdGet successfully', function(done) {
        //uncomment below and update the code to test getNewKeywordsByGroupByNewKeywordGroupIdGet
        //instance.getNewKeywordsByGroupByNewKeywordGroupIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrgUnitsByTypeByTypeGet', function() {
      it('should call getOrgUnitsByTypeByTypeGet successfully', function(done) {
        //uncomment below and update the code to test getOrgUnitsByTypeByTypeGet
        //instance.getOrgUnitsByTypeByTypeGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProfileUrlByDomainIdByDomainIdGet', function() {
      it('should call getProfileUrlByDomainIdByDomainIdGet successfully', function(done) {
        //uncomment below and update the code to test getProfileUrlByDomainIdByDomainIdGet
        //instance.getProfileUrlByDomainIdByDomainIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProfileUrlByOrgUnitCodeByOrgUnitCodeGet', function() {
      it('should call getProfileUrlByOrgUnitCodeByOrgUnitCodeGet successfully', function(done) {
        //uncomment below and update the code to test getProfileUrlByOrgUnitCodeByOrgUnitCodeGet
        //instance.getProfileUrlByOrgUnitCodeByOrgUnitCodeGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProjectSearchResultSizeByQueryStringGet', function() {
      it('should call getProjectSearchResultSizeByQueryStringGet successfully', function(done) {
        //uncomment below and update the code to test getProjectSearchResultSizeByQueryStringGet
        //instance.getProjectSearchResultSizeByQueryStringGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPublicationAuthorByYearYEndByStaffIdAndYStartGet', function() {
      it('should call getPublicationAuthorByYearYEndByStaffIdAndYStartGet successfully', function(done) {
        //uncomment below and update the code to test getPublicationAuthorByYearYEndByStaffIdAndYStartGet
        //instance.getPublicationAuthorByYearYEndByStaffIdAndYStartGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPublicationsForCentreByCentreIdGet', function() {
      it('should call getPublicationsForCentreByCentreIdGet successfully', function(done) {
        //uncomment below and update the code to test getPublicationsForCentreByCentreIdGet
        //instance.getPublicationsForCentreByCentreIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPublicationsForGroupPost', function() {
      it('should call getPublicationsForGroupPost successfully', function(done) {
        //uncomment below and update the code to test getPublicationsForGroupPost
        //instance.getPublicationsForGroupPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPublicationsPost', function() {
      it('should call getPublicationsPost successfully', function(done) {
        //uncomment below and update the code to test getPublicationsPost
        //instance.getPublicationsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPublishingActiveAuthorByStaffIdGet', function() {
      it('should call getPublishingActiveAuthorByStaffIdGet successfully', function(done) {
        //uncomment below and update the code to test getPublishingActiveAuthorByStaffIdGet
        //instance.getPublishingActiveAuthorByStaffIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getResearchSupervisorByStaffIdGet', function() {
      it('should call getResearchSupervisorByStaffIdGet successfully', function(done) {
        //uncomment below and update the code to test getResearchSupervisorByStaffIdGet
        //instance.getResearchSupervisorByStaffIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSearchResultSizeByQueryStringGet', function() {
      it('should call getSearchResultSizeByQueryStringGet successfully', function(done) {
        //uncomment below and update the code to test getSearchResultSizeByQueryStringGet
        //instance.getSearchResultSizeByQueryStringGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSelectOptionsByCategoryAndDomainIdGet', function() {
      it('should call getSelectOptionsByCategoryAndDomainIdGet successfully', function(done) {
        //uncomment below and update the code to test getSelectOptionsByCategoryAndDomainIdGet
        //instance.getSelectOptionsByCategoryAndDomainIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStaffIdByUrlIdGet', function() {
      it('should call getStaffIdByUrlIdGet successfully', function(done) {
        //uncomment below and update the code to test getStaffIdByUrlIdGet
        //instance.getStaffIdByUrlIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStaffListByCentreIdByCentreIdGet', function() {
      it('should call getStaffListByCentreIdByCentreIdGet successfully', function(done) {
        //uncomment below and update the code to test getStaffListByCentreIdByCentreIdGet
        //instance.getStaffListByCentreIdByCentreIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStaffListByIRMACenterIdByCenterIdGet', function() {
      it('should call getStaffListByIRMACenterIdByCenterIdGet successfully', function(done) {
        //uncomment below and update the code to test getStaffListByIRMACenterIdByCenterIdGet
        //instance.getStaffListByIRMACenterIdByCenterIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStaffProfileUrlByStaffIdGet', function() {
      it('should call getStaffProfileUrlByStaffIdGet successfully', function(done) {
        //uncomment below and update the code to test getStaffProfileUrlByStaffIdGet
        //instance.getStaffProfileUrlByStaffIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStaffProfileUrlForReportingByStaffIdGet', function() {
      it('should call getStaffProfileUrlForReportingByStaffIdGet successfully', function(done) {
        //uncomment below and update the code to test getStaffProfileUrlForReportingByStaffIdGet
        //instance.getStaffProfileUrlForReportingByStaffIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStaffSearchFieldsGet', function() {
      it('should call getStaffSearchFieldsGet successfully', function(done) {
        //uncomment below and update the code to test getStaffSearchFieldsGet
        //instance.getStaffSearchFieldsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStaffSearchSortingFieldsGet', function() {
      it('should call getStaffSearchSortingFieldsGet successfully', function(done) {
        //uncomment below and update the code to test getStaffSearchSortingFieldsGet
        //instance.getStaffSearchSortingFieldsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSupervisedStudentsByStaffIdGet', function() {
      it('should call getSupervisedStudentsByStaffIdGet successfully', function(done) {
        //uncomment below and update the code to test getSupervisedStudentsByStaffIdGet
        //instance.getSupervisedStudentsByStaffIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getThemeOptionsByDomainIdGet', function() {
      it('should call getThemeOptionsByDomainIdGet successfully', function(done) {
        //uncomment below and update the code to test getThemeOptionsByDomainIdGet
        //instance.getThemeOptionsByDomainIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getThemeOptionsByOrgUnitCodeByOrgUnitCodeGet', function() {
      it('should call getThemeOptionsByOrgUnitCodeByOrgUnitCodeGet successfully', function(done) {
        //uncomment below and update the code to test getThemeOptionsByOrgUnitCodeByOrgUnitCodeGet
        //instance.getThemeOptionsByOrgUnitCodeByOrgUnitCodeGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getThemesByStaffIdGet', function() {
      it('should call getThemesByStaffIdGet successfully', function(done) {
        //uncomment below and update the code to test getThemesByStaffIdGet
        //instance.getThemesByStaffIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getThesisListByStaffIdGet', function() {
      it('should call getThesisListByStaffIdGet successfully', function(done) {
        //uncomment below and update the code to test getThesisListByStaffIdGet
        //instance.getThesisListByStaffIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('isBlacklistedByStaffIdGet', function() {
      it('should call isBlacklistedByStaffIdGet successfully', function(done) {
        //uncomment below and update the code to test isBlacklistedByStaffIdGet
        //instance.isBlacklistedByStaffIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('isCurrentByStaffIdGet', function() {
      it('should call isCurrentByStaffIdGet successfully', function(done) {
        //uncomment below and update the code to test isCurrentByStaffIdGet
        //instance.isCurrentByStaffIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('isCurrentInDomainByStaffIdAndDomainIdGet', function() {
      it('should call isCurrentInDomainByStaffIdAndDomainIdGet successfully', function(done) {
        //uncomment below and update the code to test isCurrentInDomainByStaffIdAndDomainIdGet
        //instance.isCurrentInDomainByStaffIdAndDomainIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('isCurrentInOrgUnitCodeByStaffIdAndOrgUnitCodeGet', function() {
      it('should call isCurrentInOrgUnitCodeByStaffIdAndOrgUnitCodeGet successfully', function(done) {
        //uncomment below and update the code to test isCurrentInOrgUnitCodeByStaffIdAndOrgUnitCodeGet
        //instance.isCurrentInOrgUnitCodeByStaffIdAndOrgUnitCodeGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('performProjectSearchRangeSortIsReverseByQueryStringAndStartIndexGet', function() {
      it('should call performProjectSearchRangeSortIsReverseByQueryStringAndStartIndexGet successfully', function(done) {
        //uncomment below and update the code to test performProjectSearchRangeSortIsReverseByQueryStringAndStartIndexGet
        //instance.performProjectSearchRangeSortIsReverseByQueryStringAndStartIndexGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('performSimpleAttributeSearchRangeSortIsReverseByQueryStringAndStartIndexGet', function() {
      it('should call performSimpleAttributeSearchRangeSortIsReverseByQueryStringAndStartIndexGet successfully', function(done) {
        //uncomment below and update the code to test performSimpleAttributeSearchRangeSortIsReverseByQueryStringAndStartIndexGet
        //instance.performSimpleAttributeSearchRangeSortIsReverseByQueryStringAndStartIndexGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCacheByStaffIdGet', function() {
      it('should call updateCacheByStaffIdGet successfully', function(done) {
        //uncomment below and update the code to test updateCacheByStaffIdGet
        //instance.updateCacheByStaffIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
