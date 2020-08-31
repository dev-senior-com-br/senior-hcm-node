/**
 * Folha de Pagamento
 * HCM - Folha de pagamento
 *
 * OpenAPI spec version: 9.0.3
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export type AddressType = 'Others' | 'Airport' | 'Lane' | 'Area' | 'Avenue' | 'Balneary' | 'Block' | 'Field' | 'Farmstead' | 'Cologne' | 'Condominium' | 'Set' | 'District' | 'Terrace' | 'Season' | 'Road' | 'ShantyTown' | 'Farm' | 'Market' | 'Gallery' | 'Granja' | 'Garden' | 'Slope' | 'Lake' | 'Lagoon' | 'Long' | 'Allotment' | 'Hill' | 'Core' | 'Park' | 'Footbridge' | 'Courtyard' | 'Square' | 'Beach' | 'Court' | 'Nook' | 'Residential' | 'Highway' | 'Street' | 'Sector' | 'Site' | 'Bystreet' | 'Excerpt' | 'Clover' | 'Valley' | 'Path' | 'Via' | 'Viaduct' | 'Alley' | 'Village' | 'Access' | 'Camp' | 'LocalAccess' | 'Churchyard' | 'SpecialArea' | 'RightMarginalAvenue' | 'LeftMarginalAvenue' | 'RingRoad' | 'LaterRoadBetween' | 'Artery' | 'High' | 'Shortcut' | 'GreenArea' | 'ContourAvenue' | 'MarginalAvenue' | 'OldAvenue' | 'Alleyway' | 'Hole' | 'Belvedere' | 'Balloon' | 'Blocks' | 'Bulevar' | 'Forest' | 'Boulevard' | 'Low' | 'Pier' | 'Sidewalk' | 'Way' | 'Channel' | 'Chapadao' | 'BicyclePath' | 'CircularRoad' | 'HousingComplex' | 'RoadComplex' | 'Community' | 'Hall' | 'Stream' | 'Contour' | 'Descent' | 'Detour' | 'BetweenBlock' | 'IntermunicipalRoad' | 'Cove' | 'PrivateEntrance' | 'BetweenQuarter' | 'Ladder' | 'Staircase' | 'StateHighway' | 'VicinalRoad' | 'RoadConnection' | 'MunicipalRoad' | 'RoadToSerfdom' | 'OldRoad' | 'LaterRoad' | 'Stadium' | 'Office' | 'PrivateRoad' | 'Parking' | 'Evangelical' | 'Lofty' | 'IndustrialAxis' | 'Railroad' | 'Source' | 'Strong' | 'HousingNucleus' | 'Island' | 'Undetermined' | 'Islet' | 'Window' | 'Lot' | 'Marketplace' | 'Marina' | 'Module' | 'Projection' | 'Mount' | 'RuralNucleus' | 'Knoll' | 'Parallel' | 'Tour' | 'SportsSquare' | 'Stop' | 'RestArea' | 'Tip' | 'Prolonging' | 'CityPark' | 'ResidentialPark' | 'Passage' | 'PedestrianWalkway' | 'UndergroundPassage' | 'Bridge' | 'Port' | 'Fifth' | 'Farms' | 'IntegrationStreet' | 'LinkStreet' | 'PrivateStreet' | 'OldStreet' | 'Branch' | 'Playground' | 'Retreat' | 'Straight' | 'SideStreet' | 'Ramp' | 'RodoRing' | 'Kneecap' | 'PedestrianStreet' | 'Margin' | 'Return' | 'Roundabout' | 'SecondAvenue' | 'Bondage' | 'Uploading' | 'Trench' | 'Terminal' | 'Tunnel' | 'PrivateBystreet' | 'OldBystreet' | 'Unity' | 'CollectorRoad' | 'LocalWay' | 'AccessWay' | 'Ditch' | 'CoastalWay' | 'Expressway' | 'HighRoad' | 'CoastalRoad' | 'Walkway' | 'Variant' | 'Zigzag';

export const AddressType = {
  Others: 'Others' as AddressType,
  Airport: 'Airport' as AddressType,
  Lane: 'Lane' as AddressType,
  Area: 'Area' as AddressType,
  Avenue: 'Avenue' as AddressType,
  Balneary: 'Balneary' as AddressType,
  Block: 'Block' as AddressType,
  Field: 'Field' as AddressType,
  Farmstead: 'Farmstead' as AddressType,
  Cologne: 'Cologne' as AddressType,
  Condominium: 'Condominium' as AddressType,
  Set: 'Set' as AddressType,
  District: 'District' as AddressType,
  Terrace: 'Terrace' as AddressType,
  Season: 'Season' as AddressType,
  Road: 'Road' as AddressType,
  ShantyTown: 'ShantyTown' as AddressType,
  Farm: 'Farm' as AddressType,
  Market: 'Market' as AddressType,
  Gallery: 'Gallery' as AddressType,
  Granja: 'Granja' as AddressType,
  Garden: 'Garden' as AddressType,
  Slope: 'Slope' as AddressType,
  Lake: 'Lake' as AddressType,
  Lagoon: 'Lagoon' as AddressType,
  Long: 'Long' as AddressType,
  Allotment: 'Allotment' as AddressType,
  Hill: 'Hill' as AddressType,
  Core: 'Core' as AddressType,
  Park: 'Park' as AddressType,
  Footbridge: 'Footbridge' as AddressType,
  Courtyard: 'Courtyard' as AddressType,
  Square: 'Square' as AddressType,
  Beach: 'Beach' as AddressType,
  Court: 'Court' as AddressType,
  Nook: 'Nook' as AddressType,
  Residential: 'Residential' as AddressType,
  Highway: 'Highway' as AddressType,
  Street: 'Street' as AddressType,
  Sector: 'Sector' as AddressType,
  Site: 'Site' as AddressType,
  Bystreet: 'Bystreet' as AddressType,
  Excerpt: 'Excerpt' as AddressType,
  Clover: 'Clover' as AddressType,
  Valley: 'Valley' as AddressType,
  Path: 'Path' as AddressType,
  Via: 'Via' as AddressType,
  Viaduct: 'Viaduct' as AddressType,
  Alley: 'Alley' as AddressType,
  Village: 'Village' as AddressType,
  Access: 'Access' as AddressType,
  Camp: 'Camp' as AddressType,
  LocalAccess: 'LocalAccess' as AddressType,
  Churchyard: 'Churchyard' as AddressType,
  SpecialArea: 'SpecialArea' as AddressType,
  RightMarginalAvenue: 'RightMarginalAvenue' as AddressType,
  LeftMarginalAvenue: 'LeftMarginalAvenue' as AddressType,
  RingRoad: 'RingRoad' as AddressType,
  LaterRoadBetween: 'LaterRoadBetween' as AddressType,
  Artery: 'Artery' as AddressType,
  High: 'High' as AddressType,
  Shortcut: 'Shortcut' as AddressType,
  GreenArea: 'GreenArea' as AddressType,
  ContourAvenue: 'ContourAvenue' as AddressType,
  MarginalAvenue: 'MarginalAvenue' as AddressType,
  OldAvenue: 'OldAvenue' as AddressType,
  Alleyway: 'Alleyway' as AddressType,
  Hole: 'Hole' as AddressType,
  Belvedere: 'Belvedere' as AddressType,
  Balloon: 'Balloon' as AddressType,
  Blocks: 'Blocks' as AddressType,
  Bulevar: 'Bulevar' as AddressType,
  Forest: 'Forest' as AddressType,
  Boulevard: 'Boulevard' as AddressType,
  Low: 'Low' as AddressType,
  Pier: 'Pier' as AddressType,
  Sidewalk: 'Sidewalk' as AddressType,
  Way: 'Way' as AddressType,
  Channel: 'Channel' as AddressType,
  Chapadao: 'Chapadao' as AddressType,
  BicyclePath: 'BicyclePath' as AddressType,
  CircularRoad: 'CircularRoad' as AddressType,
  HousingComplex: 'HousingComplex' as AddressType,
  RoadComplex: 'RoadComplex' as AddressType,
  Community: 'Community' as AddressType,
  Hall: 'Hall' as AddressType,
  Stream: 'Stream' as AddressType,
  Contour: 'Contour' as AddressType,
  Descent: 'Descent' as AddressType,
  Detour: 'Detour' as AddressType,
  BetweenBlock: 'BetweenBlock' as AddressType,
  IntermunicipalRoad: 'IntermunicipalRoad' as AddressType,
  Cove: 'Cove' as AddressType,
  PrivateEntrance: 'PrivateEntrance' as AddressType,
  BetweenQuarter: 'BetweenQuarter' as AddressType,
  Ladder: 'Ladder' as AddressType,
  Staircase: 'Staircase' as AddressType,
  StateHighway: 'StateHighway' as AddressType,
  VicinalRoad: 'VicinalRoad' as AddressType,
  RoadConnection: 'RoadConnection' as AddressType,
  MunicipalRoad: 'MunicipalRoad' as AddressType,
  RoadToSerfdom: 'RoadToSerfdom' as AddressType,
  OldRoad: 'OldRoad' as AddressType,
  LaterRoad: 'LaterRoad' as AddressType,
  Stadium: 'Stadium' as AddressType,
  Office: 'Office' as AddressType,
  PrivateRoad: 'PrivateRoad' as AddressType,
  Parking: 'Parking' as AddressType,
  Evangelical: 'Evangelical' as AddressType,
  Lofty: 'Lofty' as AddressType,
  IndustrialAxis: 'IndustrialAxis' as AddressType,
  Railroad: 'Railroad' as AddressType,
  Source: 'Source' as AddressType,
  Strong: 'Strong' as AddressType,
  HousingNucleus: 'HousingNucleus' as AddressType,
  Island: 'Island' as AddressType,
  Undetermined: 'Undetermined' as AddressType,
  Islet: 'Islet' as AddressType,
  Window: 'Window' as AddressType,
  Lot: 'Lot' as AddressType,
  Marketplace: 'Marketplace' as AddressType,
  Marina: 'Marina' as AddressType,
  Module: 'Module' as AddressType,
  Projection: 'Projection' as AddressType,
  Mount: 'Mount' as AddressType,
  RuralNucleus: 'RuralNucleus' as AddressType,
  Knoll: 'Knoll' as AddressType,
  Parallel: 'Parallel' as AddressType,
  Tour: 'Tour' as AddressType,
  SportsSquare: 'SportsSquare' as AddressType,
  Stop: 'Stop' as AddressType,
  RestArea: 'RestArea' as AddressType,
  Tip: 'Tip' as AddressType,
  Prolonging: 'Prolonging' as AddressType,
  CityPark: 'CityPark' as AddressType,
  ResidentialPark: 'ResidentialPark' as AddressType,
  Passage: 'Passage' as AddressType,
  PedestrianWalkway: 'PedestrianWalkway' as AddressType,
  UndergroundPassage: 'UndergroundPassage' as AddressType,
  Bridge: 'Bridge' as AddressType,
  Port: 'Port' as AddressType,
  Fifth: 'Fifth' as AddressType,
  Farms: 'Farms' as AddressType,
  IntegrationStreet: 'IntegrationStreet' as AddressType,
  LinkStreet: 'LinkStreet' as AddressType,
  PrivateStreet: 'PrivateStreet' as AddressType,
  OldStreet: 'OldStreet' as AddressType,
  Branch: 'Branch' as AddressType,
  Playground: 'Playground' as AddressType,
  Retreat: 'Retreat' as AddressType,
  Straight: 'Straight' as AddressType,
  SideStreet: 'SideStreet' as AddressType,
  Ramp: 'Ramp' as AddressType,
  RodoRing: 'RodoRing' as AddressType,
  Kneecap: 'Kneecap' as AddressType,
  PedestrianStreet: 'PedestrianStreet' as AddressType,
  Margin: 'Margin' as AddressType,
  Return: 'Return' as AddressType,
  Roundabout: 'Roundabout' as AddressType,
  SecondAvenue: 'SecondAvenue' as AddressType,
  Bondage: 'Bondage' as AddressType,
  Uploading: 'Uploading' as AddressType,
  Trench: 'Trench' as AddressType,
  Terminal: 'Terminal' as AddressType,
  Tunnel: 'Tunnel' as AddressType,
  PrivateBystreet: 'PrivateBystreet' as AddressType,
  OldBystreet: 'OldBystreet' as AddressType,
  Unity: 'Unity' as AddressType,
  CollectorRoad: 'CollectorRoad' as AddressType,
  LocalWay: 'LocalWay' as AddressType,
  AccessWay: 'AccessWay' as AddressType,
  Ditch: 'Ditch' as AddressType,
  CoastalWay: 'CoastalWay' as AddressType,
  Expressway: 'Expressway' as AddressType,
  HighRoad: 'HighRoad' as AddressType,
  CoastalRoad: 'CoastalRoad' as AddressType,
  Walkway: 'Walkway' as AddressType,
  Variant: 'Variant' as AddressType,
  Zigzag: 'Zigzag' as AddressType
};
